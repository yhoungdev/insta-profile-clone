import React, { Component } from 'react';
class Edit extends Component {
    state = {
        update :' a simple insta clone made with react'

     }
//constructor

   styles(){
        return{
            'display':'flex'
        }
}

btn(){
    return{
        'color':'black',
        'background':'white',
        'borderRadius':5,
        'width':160,
        'height':40,
        'outLine':'none'
    }
}
//clikc action 

 edit=()=>{
    //const ask=prompt('what is your name ')

  var doc=document.querySelector('#bio');
  doc.style.display='block'
}
bio =()=>{
   const user= document.querySelector('input');
   let val=user.value;
   this.setState({
    update:`${val}`
})
    if(localStorage.setItem == null){
        localStorage.getItem('bio')
    }else {
        localStorage.setItem('bio',val)
    }
}

//other tab
def=()=>{
    const div=document.querySelector('.def');
    div.style.display='none'
    document.querySelector('.no').style.display='block'
    document.querySelector('#saved').style.display='none'
    document.querySelector('#photo').style.display='none'
   
}

//uploads

pho=()=>{
    const div=document.querySelector('#photo');
    div.style.display='none'
    document.querySelector('#saved').style.display='none'
    document.querySelector('#photo').style.display='block'
    document.querySelector('.no').style.display='none'
  
   
}
//fb tag 
fb=()=>{
    const div=document.querySelector('#photo');
    div.style.display='none'
    document.querySelector('#photo').style.display='none'
    document.querySelector('.no').style.display='none'
    document.querySelector('#saved').style.display='block'
  
   
}
real=()=>{
    const div=document.querySelector('.def');
    div.style.display='block'
    document.querySelector('#photo').style.display='none'
    document.querySelector('.no').style.display='none'
    document.querySelector('#saved').style.display='none'
  
   
}
cls=()=>{
    document.querySelector('#bio').style.display='none'
}

    render() { 
        return ( 
            <div>
                <div style={this.styles()}>
               <div>
               <span>
                   <img className='rounded-circle mt-4' width='75' src='https://instagram.fabb1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66346093_2433730096848348_7386158724693360640_n.jpg?_nc_ht=instagram.fabb1-1.fna.fbcdn.net&_nc_ohc=9TIIddB3vO0AX_eCP5M&oh=a2315471750f8a8841e2c34de9dee0e9&oe=5FCDA621' alt="profile photo" />
               </span>
               </div>
               <div className='ml-4 mt-4'>
                    <span>
                        <p style={{'fontSize':20}}> Obiabo_Immanuel</p>
                    </span>
                    <button style={this.btn()} onClick={this.edit}>
                        Edit profile
                    </button>
                    <div className="container mt-4" id='bio' style={{'display':'none'}}>
                        <div className="card text-left">
                        <span onClick={this.cls} className='ml-4'>
                               <b>
                               &times;
                               </b>
                           </span>
                          <div className="card-body">
                            <input type="text" className='form-control'/>
                            <button className='btn btn-danger mt-3' onClick={this.bio}>update</button>
                           

                          </div>
                        </div>
                    </div>
                   
               </div>
            </div>

            <div style={{'width':290 ,}} className='mt-5'>
            <h6> <b> Instagram clone</b> </h6> 
            {localStorage.getItem('bio')}
            {this.props.bio}
            </div>
            <hr/>

            <div id='useInfo'>
                <ul className='mr-5' style={{'listStyleType':'none' ,'display':'flex','justifyContent':'space-between'}}>
                    <li>post </li>
                    <li>post </li>
                    <li>post </li>
                </ul>
            </div>
 <hr/>
            <div id='icons2'>
                <ul className='mr-5' style={{'listStyleType':'none' ,'display':'flex','justifyContent':'space-between'}}>
                    <li >
                       <svg aria-label="Posts" onClick={this.real} class="_8-yf5 " fill="#0095f6" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z" fill-rule="evenodd"></path></svg>
                    </li>
                    <li>
                      <svg aria-label="Posts" onClick={this.def} class="_8-yf5 " fill="#8e8e8e" height="24" viewBox="0 0 48 48" width="24"><path d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path></svg>
                    </li>
                    <li>
                     <svg aria-label="Saved" class="_8-yf5 " onClick={this.fb} fill="#8e8e8e" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                    </li>
                    <li>
                    <svg aria-label="Tagged" onClick={this.pho} class="_8-yf5 " fill="#8e8e8e" height="24" viewBox="0 0 48 48" width="24"><path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path></svg>
                    </li>
                </ul>
                
            </div>
<hr/>
            <div className='def'>
            <img src="https://picsum.photos/200/200?random=8" className='mr-4 mt-3'  />
            <img src="https://picsum.photos/200/200?random=9" className='mr-4 mt-3'/>
            <img src="https://picsum.photos/200/200?random=12" className='mr-4 mt-3 '/>
            <img src="https://picsum.photos/200/200?random=0" className='mt-3'/>
            </div>

            <div className='no mt-4' style={{'display':'none'}} >
              <center>
              <h5>
                    Nothing to show here <br/>
                    
                </h5>
              </center>
            </div>

            <div id='photo' style={{'display':'none'}}>
            <img src="https://picsum.photos/200/200?random=0" className='mt-3' />
            </div>

           <center>
           <div id='saved' style={{'display':'none'}} >
                <h5>you have no saveed item</h5>
            </div>
           </center>
            </div>
         );
    }
}
 
export default Edit;