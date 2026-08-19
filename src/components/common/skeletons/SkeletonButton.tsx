import Skeleton from '@/src/components/common/skeletons/Skeleton'

interface SkeletonButtonProps {
  fullWidth?: boolean
  className?: string
}

export default function SkeletonButton({
  fullWidth = false,
  className = '',
}: SkeletonButtonProps) {
  return (
    <Skeleton
      className={`
        h-10
        ${fullWidth ? 'w-full' : 'w-28'}
        rounded-lg
        ${className}
      `}
    />
  )
}

/*
Usage

Normal button:
<SkeletonButton />

Full-width button:
<SkeletonButton fullWidth />

Custom width:
<SkeletonButton className="w-40" />
*/