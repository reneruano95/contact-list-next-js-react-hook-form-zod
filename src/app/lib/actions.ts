import { FormInputs } from "../ui/contacts/create-form";

const AGENDA_SLUG = "agenda_rene";
const url = "https://playground.4geeks.com/apis/fake/contact/";

export async function createContact(formData: FormInputs) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, agenda_slug: AGENDA_SLUG }),
    });

    if (!res.ok) {
      throw new Error("Failed to create contact");
    }

    return await res.json();
  } catch (error: any) {
    throw new Error("Error in createContact function: " + error.message);
  }
}

export async function getAllContacts() {
  try {
    const contactsRes = await fetch(`${url}agenda/${AGENDA_SLUG}/`);

    if (!contactsRes.ok) {
      throw new Error("Could not fetch contacts");
    }

    return await contactsRes.json();
  } catch (error: any) {
    console.log("Error getting all contacts: ", error.message);
    throw new Error("Error in getAllContacts function");
  }
}
