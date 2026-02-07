import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className="relative w-full sm:w-80">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/70"
      />

      <input
        type="text"
        placeholder="Search"
        className="
          w-full rounded-xl
          border border-solid border-primary/60
          bg-background
          py-2.5 pl-10 pr-4 text-sm
          text-foreground
          outline-none appearance-none
          transition-colors
          hover:border-primary
          focus:border-primary
          focus:ring-2 focus:ring-primary/40
        "
      />
    </div>
  )
}

export default SearchBar
