import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold">Project Not Found</h2>
        <p className="text-muted-foreground text-lg">
          The project you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/work">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Work
          </Link>
        </Button>
      </div>
    </div>
  )
}
