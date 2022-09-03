import { createSlice } from "@reduxjs/toolkit"

const MusicSlice = createSlice({
  name: "currentMusic",
  initialState: {
    name: "Monégasque",
    isPlaying: false,
    isPlayingRandom: false,
    loopMode: "no_loop",
    time: 0,
    timeInMinSecs: "00:00",
    duration: 180,
    durationINMinSecs: "03:00",
    musicProgressionPercentage: 0
  },
  reducers: {
    tooglePlaying: (state, action) => {
      state.isPlaying = !state.isPlaying
    },
    changeLoopMode: (state, action) => {
      state.loopMode = action.payload
    }
  }
})