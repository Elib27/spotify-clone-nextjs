import { configureStore, createSlice } from "@reduxjs/toolkit"

const musicSlice = createSlice({
  name: "music",
  initialState: {
    currentTrack: {
      name: "",
      artists: [""],
      image: "",
      album: "",
      id: "",
      soundType: "track",
    },
    currentPlaylist: "",
    isPlaying: false,
    isPlayingRandom: false,
    loopMode: "no_loop",
    time: 0,
    duration: 180,
    volume: 60,
    prevVolume: 50,
    musicIndexInQueue: 0,
    tracksQueue: [],
  },
  reducers: {
    changeCurrentMusic(state, action) {
      state.currentTrack = {...state.currentTrack, ...action.payload}
    },
    changeCurrentMusicId(state, action) {
      state.currentTrack.id = action.payload
    },
    changeCurrentPlaylist(state, action) {
      state.currentPlaylist = action.payload
    },
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
    changeDuration: (state, action) => {
      state.duration = action.payload
    },
    changeSoundType: (state, action) => {
      state.currentTrack.soundType = action.payload
    },
    changeVolume: (state, action) => {
      state.volume = action.payload
    },
    changePrevVolume: (state, action) => {
      state.prevVolume = action.payload
    },
    changeMusicIndexInQueue: (state, action) => {
      state.musicIndexInQueue = action.payload
    },
    changeTracksQueue: (state, action) => {
      state.tracksQueue = action.payload
    },
    addToQueue(state, action) {
      state.tracksQueue = [...state.tracksQueue, action.payload]
    }
  }
})

export const {
  changeCurrentMusic,
  changeCurrentMusicId,
  changeCurrentPlaylist,
  togglePlaying,
  playMusic,
  togglePlayingRandom,
  incrementLoopMode,
  changeLoopMode,
  changeTime,
  changeDuration,
  changeSoundType,
  changeVolume,
  changePrevVolume,
  changeMusicIndexInQueue,
  changeTracksQueue,
  addToQueue
} = musicSlice.actions


export const store = configureStore({
  reducer: {
    music: musicSlice.reducer
  }
})