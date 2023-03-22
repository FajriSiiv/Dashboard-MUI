import { create } from "zustand";
import {
  API_DeleteContact,
  API_EditContact,
  API_GetContact,
  API_GetContactByID,
} from "../api/contact";

const useStore = create((set: any) => ({
  contact: [],
  contactId: {},
  getDataContact: async () => {
    const contact = await API_GetContact();
    set({ contact });
  },
  getDataContactByID: async (id: any) => {
    const contactId = await API_GetContactByID(id);
    set({ contactId });
  },
  deleteDataContact: async (id: any) => {
    await API_DeleteContact(id);
  },
  editDataContact: async (id: any, body: any) => {
    await API_EditContact(id, body);
  },
}));

export default useStore;
