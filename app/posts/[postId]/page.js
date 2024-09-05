import PostDetails from "@/app/component/postDetails";
import { Suspense } from "react";
const loadingJsx=(
    <div><h1>loading.......</h1></div>
)
const PostId=async(props)=>{
    const productId=props.params.postId
      
    return(
    <div>
    <h1>product page</h1>
   <Suspense fallback={loadingJsx}>
   <PostDetails productId={productId}/>
    </Suspense>
    </div>
)
}
export default PostId