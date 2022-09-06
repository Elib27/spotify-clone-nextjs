import { configureStore, createSlice } from "@reduxjs/toolkit"

const musicSlice = createSlice({
  name: "music",
  initialState: {
    name: "Monégasque",
    isPlaying: false,
    isPlayingRandom: false,
    loopMode: "no_loop",
    time: 0,
    timeInMinSecs: "00:00",
    duration: 180,
    durationInMinSecs: "03:00",
    musicProgressionPercentage: 0,
    volume: 50,
    volumeCategory: 'medium',
    prevVolume: 50,
    soundType: 'music'
  },
  reducers: {
    togglePlaying: (state, action) => {
      state.isPlaying = !state.isPlaying
    },
    playMusic: (state, action) => {
      state.isPlaying = true
    },
    togglePlayingRandom: (state, action) => {
      state.isPlayingRandom = !state.isPlayingRandom
    },
    changeLoopMode: (state, action) => {
      switch(state.loopMode) {
        case 'no_loop':
          state.loopMode = 'loop_1'
          break
        case 'loop_1':
          state.loopMode = 'loop_2'
          break
        case 'loop_2':
          state.loopMode = 'no_loop'
          break
      }
    },
    changeTime: (state, action) => {
      state.time = action.payload
    },
    updateTimeInMinSecs: (state, action) => {
      const min = Math.floor(state.time / 60).toString().padStart(2, '0')
      const sec = Math.floor(state.time % 60).toString().padStart(2, '0')
      state.timeInMinSecs = `${min}:${sec}`
    },
    changeDuration: (state, action) => {
      state.duration = action.payload
    },
    updateDurationInMinSecs: (state, action) => {
      const min = Math.floor(state.duration / 60).toString().padStart(2, '0')
      const sec = Math.floor(state.duration % 60).toString().padStart(2, '0')
      state.durationInMinSecs = `${min}:${sec}`
    },
    changeVolume: (state, action) => {
      state.volume = action.payload
    },
    changeVolumeCategory: (state, action) => {
      if (state.volume === 0 && state.volumeCategory !== 'muted') {
        state.volumeCategory = 'muted'
      }
      else if ((state.volume > 0 && state.volume <= 30) && state.volumeCategory !== 'low') {
        state.volumeCategory = 'low'
      }
      else if ((state.volume > 30 && state.volume <= 70) && state.volumeCategory !== 'medium') {
        state.volumeCategory = 'medium'
      }
      else if (state.volume > 70 && state.volumeCategory !== 'high') {
        state.volumeCategory = 'high'
      }
    },
    changePrevVolume: (state, action) => {
      state.prevVolume = action.payload
    }
  }
})

export const {
  togglePlaying,
  playMusic,
  togglePlayingRandom,
  changeLoopMode,
  changeTime,
  updateTimeInMinSecs,
  changeDuration,
  updateDurationInMinSecs,
  changeVolume,
  changeVolumeCategory,
  changePrevVolume
} = musicSlice.actions

export const store = configureStore({
  reducer: {
    music: musicSlice.reducer
  }
})