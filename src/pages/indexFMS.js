import React from 'react';
import { useState, useEffect } from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import {avatarDir, avatarStyle, avatarFrame, avatarNameStyle, avatarBoxStyle, docDir, rarityMap, typeMap} from '/src/components/CardInfo/cardConfig'
import SearchBox from './searchBox';

const FileManagementSystem = () => {
  const [cardsData, setCardsData] = useState([]);
  const pluginData = usePluginData("my-fetch-plugin");

  useEffect(() => {
    if (pluginData && pluginData.info) {
      const data = pluginData.info;
      setCardsData(data);
    }
  }, [pluginData]);

  if (!cardsData) {
    return null; // or some loading state
  }

  const [filter, setFilter] = useState('');

  const filteredCards = cardsData.filter((card) =>
    card["name"].toLowerCase().includes(filter.toLowerCase()) || card.alias.includes(filter.toLowerCase())
  );

  return (
    <div>
      <SearchBox value={filter} handler={setFilter}/>

      <div style={avatarFrame}>
        {filteredCards.reverse().map((card) => (
          <div key={card.name} style={avatarBoxStyle}> 
            <a href={`${docDir}/${typeMap[card.type]}/${rarityMap[card.rarity]}/${card.name}`}><img src={`${avatarDir}/${card.name}.png`} style={avatarStyle}></img></a>        
            <div style={avatarNameStyle}><a href={`${docDir}/${typeMap[card.type]}/${rarityMap[card.rarity]}/${card.name}`}>{card.alias}.md</a></div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default FileManagementSystem;