import axios from "axios";

export default {
  // Gets all deals
  getDeals: function() {
    return axios.get("/api/currentdeals/");
  },
  getAllDeals: function() {
    return axios.get("/api/alldeals/");
  },
  getDealsInactive: function() {
    return axios.get("/api/pastdeals");
  },
  // Gets the deal with the given id
  getDeal: function(id) {
    return axios.get("/api/" + id);
  },
  // Deletes the deal with the given id
  deleteDeal: function(id) {
    return axios.delete("/api/" + id);
  },
  // Saves a deal to the database
  saveDeal: function(dealData) {
    return axios.post("/api/", dealData);
  },

  updateDeal: function(id, dealData) {
      return axios.put(`/api/${id}`, dealData);
  }
};
