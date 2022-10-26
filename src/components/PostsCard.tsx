import { Posts } from '../types'
import '../style/index.css'

interface PostCardProps {
  post: Posts
}


export default function ProductCard({ post }: PostCardProps) {
  return (
    <div className="container">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}
