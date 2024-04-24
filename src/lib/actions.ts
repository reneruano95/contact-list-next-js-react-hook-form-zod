import { FormInputs } from "../components/contacts/create-form";

const AGENDA_SLUG = "rene";
const url = "https://playground.4geeks.com/contact";

export async function createAgenda() {
  let res: Response
  try {
    res = await fetch(`${url}/agendas/${AGENDA_SLUG}`, {
      method: "POST"
    })

    if (!res.ok) {
      throw new Error("Failed to create agenda");
    }

  } catch (error: any) {
    throw new Error("Error in createAgenda function: " + error.message);
  }
  const result = await res.json()
  return result
}

export async function getAgenda() {
  let response: Response
  try {
    response = await fetch(`${url}/agendas/${AGENDA_SLUG}`)

    if (!response.ok) {
      throw new Error('Failed to get agenda')
    }
  } catch (error: any) {
    throw new Error(`Error getting the agenda: ${error.message}`)
  }
  const result = await response.json()
  return result
}

export async function createContact(formData: FormInputs) {
  try {
    const res = await fetch(`${url}/agendas/${AGENDA_SLUG}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to create contact");
    }

    return await res.json();
  } catch (error: any) {
    throw new Error("Error in createContact function: " + error.message);
  }
}


export async function updateContact(id: string, formData: FormInputs) {
  try {
    const res = await fetch(`${url}/agendas/${AGENDA_SLUG}/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, agenda_slug: AGENDA_SLUG }),
    });

    if (!res.ok) {
      throw new Error("Failed to update contact");
    }

    return await res.json();
  } catch (error: any) {
    throw new Error("Error in updateContact function: " + error.message);
  }
}

export async function getAllContacts() {
  try {
    const res = await fetch(`${url}/agendas/${AGENDA_SLUG}/contacts`);

    if (!res.ok) {
      throw new Error("Could not fetch contacts");
    }

    return await res.json();
  } catch (error: any) {
    console.log("Error getting all contacts: ", error.message);
    throw new Error(`Error getting all contacts: ${error.message}`);
  }
}

export async function getContactById(id: string) {
  const res = await fetch(`${url}/agendas/${AGENDA_SLUG}/contacts/${id}`);
  const data = await res.json();
  return data;
}

export async function deleteContact(id: string) {
  try {
    const res = await fetch(`${url}/agendas/${AGENDA_SLUG}/contacts/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete contact");
    }
  } catch (error: any) {
    throw new Error("Error deleting contact: " + error.message);
  }
}
