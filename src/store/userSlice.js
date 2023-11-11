import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  getCurrentUser,
  signOutUser,
  singInGoogle,
  singInUser,
} from "../API/firebase";

export const getUser = createAsyncThunk("users/getUser", async () => {
  const user = await getCurrentUser();
  return user.uid;
});

export const signIn = createAsyncThunk(
  "users/signIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await singInUser(email, password);
      if (!user) throw new Error("Not found user");
      return user.uid;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signUp = createAsyncThunk(
  "users/signUp",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await createUser(email, password);
      if (!user) throw new Error("Error(");
      return user.uid;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signGoogle = createAsyncThunk(
  "users/signGoogle",
  async (_, { rejectWithValue }) => {
    try {
      const user = await singInGoogle();
      if (!user) throw new Error("Error(");
      return user.uid;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk("users/signOut", async () => {
  await signOutUser();
});

const initialState = {
  user: null,
  userEmail: "",
  userPassword: "",
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(signGoogle.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signGoogle.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
