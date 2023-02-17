import './css/card.css'
import blog_imges from './images/blog_image.jpeg'
import {useState} from 'react'
import axios from 'axios'

function Card(props){
    const title=props.ite;
    const [data,setdata]=useState(' ')
 
    axios.get('https://jsonplaceholder.typicode.com/posts/'+props.num).then(res=>{
        //   console.log('hi')
        //  var first=res.data.results[0].name.first
        //  var last=res.data.results[0].name.last
        //   setdata(first +' ' +last)
         setdata(res.data.title)
        })
    return(
        
        <div class="card">
        <div class="card-top">
            <img src={blog_imges} alt="" class="blog-img"/>
            
        </div>
        <div class="card-bottom">
            <div class="bottom-top">
                <h2 class="title">{data}</h2>
                <a  href="#" class="read-btn">Read more</a>
            </div>
            <div class="bottom-bottom">
                <ul class="tag-list">
                    <li>#chatGpt</li>
                    <li>#AI</li>
                    <li>#Microsoft</li>
                    <li>#OpenAi</li>
                    <li>#RDL</li>
                    <li>#Pycharm</li>
                    <li>#Anaconda</li>
                    <li>#Tensorflow</li>
                </ul>
            </div>
        </div>
    </div>
 
  
    )
}
export default Card;