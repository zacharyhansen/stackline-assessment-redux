import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ChartData } from "chart.js";
import { RootState } from "../app/store";
import { getSales, ISales } from "../mockApi/getSales";

export interface IAsyncSlice {
  status: "idle" | "loading" | "failed";
}

export interface ISalesSlice extends IAsyncSlice, ISales {
  graphData?: ChartData<"line", number[], string>;
}

const initialState: ISalesSlice = {
  sales: [],
  title: "",
  subtitle: "",
  status: "idle",
  tags: [],
  image: "",
};

export const loadSalesAsync = createAsyncThunk("sales/getSales", async () => {
  const response = await getSales();
  return response.data;
});

export const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    filter: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSalesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadSalesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.sales = action.payload.sales;
        state.title = action.payload.title;
        state.subtitle = action.payload.subtitle;
        state.tags = action.payload.tags;
        state.image = action.payload.image;
      })
      .addCase(loadSalesAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { filter } = salesSlice.actions;

export const selectSales = (state: RootState) => state.sales.sales;
export const salesStatus = (state: RootState) => state.sales.status;

export default salesSlice.reducer;
