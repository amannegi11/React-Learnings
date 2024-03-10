import React, { useEffect, useState } from 'react'

const MemoryGame = () => {
    const data = [{url:"/memory/messi.jpg",status:false}, {url:"/memory/krishna.webp",status:false}, 
    {url:"/memory/lebron.webp",status:false}, {url:"/memory/modi.jpg",status:false}, {url:"/memory/nc.jpg",status:false}, 
    {url:"/memory/rs.jpg",status:false}, {url:"/memory/sm.jpg",status:false}, {url:"/memory/shiva.jpg",status:false}]
    const [cards, setCards] = useState([]);
    const [active,setActive]=useState("active")
    const [score,setScore]=useState(0)
    const [newGame,setNewgame]=useState(false)
    const [disabled,setDisabled]=useState(false)

    const onload=()=>{
        const suffData=[...data,...data].sort(() => Math.random() - 0.5).map((item)=>({id:Math.random(),...item}))
            setCards(suffData); 

            setTimeout(()=>{
                setActive("flipped")
            },2000)
    }
    useEffect(() => {
            onload()
    },[])
    
    const [firstCard,setFirstCard]=useState(null);

    const handleClick=(index)=>{
        console.log("clicked");
        if(firstCard==null){
            setFirstCard(index);
            cards[index].status=true;
            setCards([...cards])
        }else{
            setDisabled(true)
            cards[index].status=true;
            setCards([...cards]);
            setTimeout(()=>{
                matchCards(index)
            },1000)
        }
    } 
    const reStart=()=>{
        setFirstCard(null)
        setActive("active")
        onload()
        setNewgame(false)
    }
    const matchCards=(index)=>{
        if(cards[index].url==cards[firstCard].url){
            let allMatched=cards.filter((card)=>(card.status!==true));
            if(!allMatched.length){
                setNewgame(true)
            }
            
            setFirstCard(null)
        }else{
            cards[index].status=false;
            cards[firstCard].status=false;
            setCards([...cards])
            setFirstCard(null);
        }
        setScore(score+1)
        setDisabled(false)
    }

    
    return (
        <div className='flex flex-col justify-center items-center'>

            <div className='text-center mb-6 text-4xl font-semibold text-lime-600'>Test Your Brain!</div>
            <div className='flex lg:w-6/12 w-11/12 mx-auto flex-wrap justify-center items-center gap-4'>
            
                {
                    cards.map((card, index) => (
                        <button className='w-[20%] box bg-blue-600' key={card.id} onClick={()=>handleClick(index)} disabled={card.status || disabled} >
                            <img src={card.url} alt="" className={`${card.status ? "active" : active} w-[100%] lg:h-[140px] h-[80px]`} />
                        </button>
                    ))
                }
            </div>
            {
                newGame && 
                <div className='flex flex-col items-center justify-center mt-8 text-2xl font-mono'>
                    <div>You have taken {score} attempts</div>
                    <button className="bg-blue-800 mt-8 p-2 text-green-300 rounded-md hover:text-green-900 hover:bg-gray-100"
                    onClick={reStart}>New Game</button>
                </div>
    }
        </div>
    )
}

export default MemoryGame