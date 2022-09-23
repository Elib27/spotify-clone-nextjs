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
    volume: 60,
    volumeCategory: 'medium',
    prevVolume: 50,
    soundType: 'music'
  },
  reducers: {
    togglePlaying: (state) => {
      state.isPlaying = !state.isPlaying
    },
    playMusic: (state) => {
      state.isPlaying = true
    },
    togglePlayingRandom: (state) => {
      state.isPlayingRandom = !state.isPlayingRandom
    },
    changeLoopMode: (state, action) => {
      state.loopMode = action.payload
    },
    incrementLoopMode: (state) => {
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
    updateTimeInMinSecs: (state) => {
      const min = Math.floor(state.time / 60).toString().padStart(1, '0')
      const sec = Math.floor(state.time % 60).toString().padStart(2, '0')
      state.timeInMinSecs = `${min}:${sec}`
    },
    changeDuration: (state, action) => {
      state.duration = action.payload
    },
    updateDurationInMinSecs: (state) => {
      const min = Math.floor(state.duration / 60).toString().padStart(1, '0')
      const sec = Math.floor(state.duration % 60).toString().padStart(2, '0')
      state.durationInMinSecs = `${min}:${sec}`
    },
    changeSoundType: (state, action) => {
      state.soundType = action.payload
    },
    changeVolume: (state, action) => {
      state.volume = action.payload
    },
    changeVolumeCategory: (state) => {
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
  incrementLoopMode,
  changeLoopMode,
  changeTime,
  updateTimeInMinSecs,
  changeDuration,
  updateDurationInMinSecs,
  changeSoundType,
  changeVolume,
  changeVolumeCategory,
  changePrevVolume
} = musicSlice.actions

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    currentPage: '/',
    searchInput: '',
    history: {
      links: [],
      index: 0
    }
  },
  reducers: {
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    changeSearchInput: (state, action) => {
      state.searchInput = action.payload
    },
    incrementHistoryIndex: (state) => {
      state.history.index += 1
    },
    decrementHistoryIndex: (state) => {
      state.history.index -= 1
    },
    pushLinkToHistory: (state, action) => {
      state.history.links.push(action.payload)
    },
    removeHistoryLinksUntilIndex: (state) => {
      state.history.links = state.history.links.slice(0, state.history.index + 1)
    }
  }
})

export const {
  changeCurrentPage,
  changeSearchInput,
  incrementHistoryIndex,
  decrementHistoryIndex,
  pushLinkToHistory,
  removeHistoryLinksUntilIndex
} = navigationSlice.actions

export const store = configureStore({
  reducer: {
    music: musicSlice.reducer,
    navigation: navigationSlice.reducer
  }
})