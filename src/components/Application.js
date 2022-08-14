import React from 'react'

function Application(props) {
    return (
        <div>
            <p className='title center' style={{color:'#ffffff',margin:'10px 10px 50px 10px'}}> Android Application </p>
            <div className='flex'>
                <div style={{width:'300px', display:'flex',justifyContent:'center',borderRadius:'5px',marginBottom:'20px'}}>
                    <img width='100%' height='100%' src="https://i.ibb.co/qgrmrmD/Screenshot-2021-06-10-22-57-42-13-80c4719fb5b50d19f6e7e65d56264027.png" style={{borderRadius:'3px'}} alt=""/>
                </div>
            </div>
            <div className='flex'>
                <button 
                    onClick={()=>window.open('https://drive.google.com/u/0/uc?export=download&confirm=MEru&id=1ab1l3mkfsA6bjwIDQvO8NaVvvawx-QOg')}
                    style={{padding:'10px 120px',background:'#8a04f8a9',color:'#ffffff',border:'none',cursor:'pointer',outline:'none',marginBottom:'20px'}}>
                    Download
                </button>
            </div>
        </div>
    )
}

export default Application
