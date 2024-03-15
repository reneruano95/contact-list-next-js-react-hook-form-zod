import { FormInputs } from "../ui/contacts/create-form";

const AGENDA_SLUG = "test";
const url = "https://playground.4geeks.com/apis/fake/contact/agenda/";

export async function createContact(formData: FormInputs) {
  await fetch(url + AGENDA_SLUG, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
}
