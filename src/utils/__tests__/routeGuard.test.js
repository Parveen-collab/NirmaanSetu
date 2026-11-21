// Test route guard logic for Point 3

const REGISTERED_ROLES = [
  "EMPLOYEE",
  "EMPLOYER",
  "SUPPLIER",
  "ADMIN",
  "SUPER_ADMIN",
];

function isGuestRole(role) {
  if (!role) return false;
  return role.trim().toUpperCase() === "GUEST";
}

function isRegisteredRole(role) {
  if (!role) return false;
  return REGISTERED_ROLES.includes(role.trim().toUpperCase());
}

function getPoint3GuardedRoute(role, isAuthenticated) {
  if (isAuthenticated && isGuestRole(role)) {
    return "/register";
  }
  return "/login";
}

// Scenarios based on:
// Point 3: "when a user click on find works, hire skilled workers, sell construction materials then first if role is guest redirect it to Registartion page second if role is Employee, Employer, Supplier, Admin, Super_Admin then redirect it to Login Page."
// User prompt:
// "Check auth state and user.role:
//  o If role is GUEST, route to /register.
//  o If unauthenticated / registered role, route to /login."

const testCases = [
  { description: "Unauthenticated (no auth, no role)", role: null, isAuth: false, expected: "/login" },
  { description: "Unauthenticated (no auth, undefined role)", role: undefined, isAuth: false, expected: "/login" },
  { description: "Authenticated GUEST role", role: "GUEST", isAuth: true, expected: "/register" },
  { description: "Authenticated guest (lowercase)", role: "guest", isAuth: true, expected: "/register" },
  { description: "Authenticated EMPLOYEE role", role: "EMPLOYEE", isAuth: true, expected: "/login" },
  { description: "Authenticated EMPLOYER role", role: "EMPLOYER", isAuth: true, expected: "/login" },
  { description: "Authenticated SUPPLIER role", role: "SUPPLIER", isAuth: true, expected: "/login" },
  { description: "Authenticated ADMIN role", role: "ADMIN", isAuth: true, expected: "/login" },
  { description: "Authenticated SUPER_ADMIN role", role: "SUPER_ADMIN", isAuth: true, expected: "/login" },
  { description: "Unauthenticated with residual role string in storage but no token", role: "EMPLOYEE", isAuth: false, expected: "/login" },
];

let failed = 0;
for (const tc of testCases) {
  const actual = getPoint3GuardedRoute(tc.role, tc.isAuth);
  const pass = actual === tc.expected;
  console.log(`[${pass ? 'PASS' : 'FAIL'}] ${tc.description}`);
  console.log(`       Role: ${tc.role}, isAuth: ${tc.isAuth} => Got: ${actual}, Expected: ${tc.expected}`);
  if (!pass) failed++;
}

if (failed === 0) {
  console.log("\nAll 10 test scenarios PASSED successfully!");
  process.exit(0);
} else {
  console.error(`\n${failed} test scenarios FAILED!`);
  process.exit(1);
}
