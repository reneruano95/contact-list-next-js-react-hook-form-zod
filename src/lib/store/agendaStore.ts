import { create } from 'zustand'

type Agenda = {
    slug: string;
    contacts: []
}

type State = {
    agenda: Agenda | null
}

type Actions = {
    getAgenda: () => Promise<void>;
    createAgenda: () => Promise<void>
}

const AGENDA_SLUG = "rene";
const url = "https://playground.4geeks.com/contact";


export const useAgendaStore = create<State & Actions>((set) => ({
    agenda: null,
    getAgenda: async () => {
        let response: Response
        try {
            response = await fetch(`${url}/agendas/${AGENDA_SLUG}`)

            if (!response.ok) {
                set({ agenda: null })
                throw new Error('Failed to get agenda')
            }
        } catch (error: any) {
            set({ agenda: null })
            throw new Error(`Error getting the agenda: ${error.message}`)
        }
        const result = await response.json()
        return set({ agenda: result })
    },
    createAgenda: async () => {
        let res: Response
        try {
            res = await fetch(`${url}/agendas/${AGENDA_SLUG}`, {
                method: "POST"
            })

            if (!res.ok) {
                set({ agenda: null })
                throw new Error("Failed to create agenda");
            }

        } catch (error: any) {
            set({ agenda: null })
            throw new Error("Error in createAgenda function: " + error.message);
        }
        const result = await res.json()
        return set({ agenda: result })
    }
}))
// useAgendaStore.getState().createAgenda()
useAgendaStore.getState().getAgenda()