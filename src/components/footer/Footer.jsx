import React, { useState, useEffect } from 'react';
import './AlphabetSpeech.css';
import { Link } from 'react-router-dom';

const AlphabetSpeech = () => {
  const alphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];




  const speakLetter = (letter) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Мурдагы сүйлөп жатканды токтотуу
      const utterance = new SpeechSynthesisUtterance(letter);
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="alphabet-container">
      <h4 className="alphabet-title">Browse By Name</h4>
      
      <div className="alphabet-list">
        {alphabet.map((letter, index) => (
          <span key={index} className="letter-item">
            <Link
            to={`/letter/${letter}`}
              className="letter-btn"
            >
              {letter}
            </Link>
            <span className="separator">/</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default AlphabetSpeech;