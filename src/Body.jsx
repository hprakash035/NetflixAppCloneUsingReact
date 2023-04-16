import React from "react";
import "./Body.css";
import Card from "./Card";
import CardData from "./CardData";
console.log(CardData);
const Body=()=>{
	return(
		<div className="body">
			<Card 
			  name={CardData[0].seriesName} 
			  url={CardData[0].seriesUrl}
			  about={CardData[0].seriesAbout}
			  imgurl={CardData[0].seriesImage}
			  />
			<Card 
			name={CardData[1].seriesName} 
			url={CardData[1].seriesUrl}
			about={CardData[1].seriesAbout}
			imgurl={CardData[1].seriesImage}/>
			<Card 
			name={CardData[2].seriesName} 
			url={CardData[2].seriesUrl}
			about={CardData[2].seriesAbout}
			imgurl={CardData[2].seriesImage}/>
			<Card 
			name={CardData[3].seriesName} 
			url={CardData[3].seriesUrl}
			about={CardData[3].seriesAbout}
			imgurl={CardData[3].seriesImage}/>
			<Card 
			name={CardData[4].seriesName} 
			url={CardData[4].seriesUrl}
			about={CardData[4].seriesAbout}
			imgurl={CardData[4].seriesImage}/>
		</div>
	)
}

export default Body;