import { useCallback } from 'react';
import { playSoundEffect } from '../utils/audio';

export const useAudio = (isMuted: boolean = false) => {
  const playClick = useCallback(() => {
    playSoundEffect('click', isMuted);
  }, [isMuted]);

  const playCorrect = useCallback(() => {
    playSoundEffect('correct', isMuted);
  }, [isMuted]);

  const playWrong = useCallback(() => {
    playSoundEffect('wrong', isMuted);
  }, [isMuted]);

  const playUnlock = useCallback(() => {
    playSoundEffect('unlock', isMuted);
  }, [isMuted]);

  const playFanfare = useCallback(() => {
    playSoundEffect('fanfare', isMuted);
  }, [isMuted]);

  return {
    playClick,
    playCorrect,
    playWrong,
    playUnlock,
    playFanfare,
  };
};
