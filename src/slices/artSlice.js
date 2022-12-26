import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/artApi";
import jwtDecode from "jwt-decode";

export const artSlice = createSlice({
  name: "artList",
  initialState: {
    isPending: true,
    arts: {
      data: null,
      currentPage: null,
      numberOfPages: null,
    },
    currentArt: {},
    searchArts: {
      data: null,
    },
    authorArts: {
      data: null,
    },
    manageArts: {
      data: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArts.pending, (state) => {
        state.isPending = true;
      })

      .addCase(fetchArts.fulfilled, (state, action) => {
        state.arts.data = action.payload.data.data;
        state.arts.currentPage = action.payload.data.currentPage;
        state.arts.numberOfPages = action.payload.data.numberOfPages;
        state.isPending = false;
      })

      .addCase(fetchArts.rejected, (state) => {
        state.isPending = false;
      })

      .addCase(fetchArtsBySearch.pending, (state) => {
        state.isPending = true;
      })

      .addCase(fetchArtsBySearch.fulfilled, (state, action) => {
        state.searchArts.data = action.payload.data.data;

        state.isPending = false;
      })

      .addCase(fetchArtsBySearch.rejected, (state) => {
        state.isPending = false;
      })

      .addCase(fetchSingleArt.pending, (state) => {
        state.isPending = true;
        state.currentArt = {};
      })

      .addCase(fetchSingleArt.fulfilled, (state, action) => {
        state.isPending = false;
        state.currentArt = action.payload.data;
      })

      .addCase(fetchSingleArt.rejected, (state) => {
        state.isPending = false;
      })

      .addCase(fetchManageArts.pending, (state) => {
        state.isPending = true;
      })

      .addCase(fetchManageArts.fulfilled, (state, action) => {
        state.manageArts.data = action.payload.data.data;
        state.isPending = false;
      })

      .addCase(fetchManageArts.rejected, (state) => {
        state.isPending = false;
      })

      .addCase(fetchAuthorArts.pending, (state) => {
        state.isPending = true;
      })

      .addCase(fetchAuthorArts.fulfilled, (state, action) => {
        state.authorArts.data = action.payload.data.data;
        state.isPending = false;
      })

      .addCase(fetchAuthorArts.rejected, (state) => {
        state.isPending = false;
      });
  },
});

export const fetchArts = createAsyncThunk("artList/fetchArts", async (page) => {
  const res = await api.getArts(page);
  return res;
});

export const fetchManageArts = createAsyncThunk(
  "artList/fetchManageArts",
  async (authorId) => {
    const res = await api.getManageArts(authorId);
    return res;
  }
);

export const fetchArtsBySearch = createAsyncThunk(
  "artList/fetchArtsBySearch",
  async (search) => {
    const res = await api.getArtsBySearch(search);
    return res;
  }
);

export const fetchSingleArt = createAsyncThunk(
  "artList/fetchSingleArt",
  async (slug) => {
    const res = await api.getSingleArt(slug);
    return res;
  }
);

export const createArt = createAsyncThunk(
  "artList/createArt",
  async (newArt) => {
    const { id, ...art } = newArt;
    const data = await api.createArt(id, art);
    return data;
  }
);

export const editArt = createAsyncThunk(
  "artList/editArt",
  async (updatedArt) => {
    const { id, ...art } = updatedArt;
    const data = api.editArt(id, art);

    return data;
  }
);

export const deleteArt = createAsyncThunk("artList/deleteArt", async (id) => {
  const { data } = await api.deleteArt(id);
  return data;
});

export const fetchAuthorArts = createAsyncThunk(
  "artList/fetchAuthorArts",
  async (author) => {
    const { data } = await api.getAuthorArts(author);

    return data;
  }
);
