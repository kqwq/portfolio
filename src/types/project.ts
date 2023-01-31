import { tech } from "./tech"

// Define tpyes for project
type projectProps = {
  timeRange: string
  title?: string
  domain?: string
  tagline?: string
  descriptionHtml: string
  technologies?: tech[]
  images?: string[]
  priority: number // 0 is highest priority, 999 would be low
}


export { type projectProps }