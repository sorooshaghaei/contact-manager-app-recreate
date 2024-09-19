import axios from "axios";

const SERVER_URL = "http://localhost:9000";

// ==================================================> GET
export const getAllContacts = () => {
  const url = `${SERVER_URL}/contacts`;
  return axios.get(url);
};

export const getContact = (contactID) => {
  const url = `${SERVER_URL}/contacts/${contactID}`;
  return axios.get(url);
};

export const getAllGroups = () => {
  const url = `${SERVER_URL}/groups/`;
  return axios.get(url);
};

export const getGroup = (groupID) => {
  const url = `${SERVER_URL}/groups/${groupID}`;
  return axios.get(url);
};

// ==================================================> POST
export const createContact = (contact) => {
  const url = `${SERVER_URL}/contacts/`;
  return axios.post(url, contact);
};

// ==================================================> UPDATE(PUT)
export const updateContact = (contact, contactID) => {
  const url = `${SERVER_URL}/contacts/${contactID}`;
  return axios.put(url, contact);
};

// ==================================================> DELETE
export const deleteContact = (contactID) => {
  const url = `${SERVER_URL}/contacts/${contactID}`;
  return axios.delete(url);
};
