import Link from "next/link"
const PostPage=async()=>{
    const response=await fetch('https://ecommerce-backend-i2px.onrender.com/api/product/allProduct')
      const posts=await response.json()
      const products=posts.products
      const postJsx=products.map((product)=>{
        return (
            <Link href={`/posts/${product.id}`} style={{width:"70%"}}>
            <div style={{
                width:"100%",
                backgroundColor:"white",
                color:"black",
                padding:"10px",
                borderRadius:"10px",
                margin:"15px"
            }}>
            <h1>{product.title}</h1>
            <p>{product.details}</p>
            <p>{product.price}</p>
            </div>
            </Link>
        )
    })
    return(
        <div>
        <h1>Products page</h1>
        <div style={{display:"flex", justifyContent:"center" ,alignItems:"center", flexDirection:"column"}}>
          {postJsx}
        </div>
        
        </div>
    )
}
export default PostPage