export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[]

export interface Database {
	public: {
		Tables: {
			haikus: {
				Row: {
					date: string
					description: string
					haiku_text: string
					id: number
					slug: string
				}
				Insert: {
					date: string
					description: string
					haiku_text: string
					id?: number
					slug: string
				}
				Update: {
					date?: string
					description?: string
					haiku_text?: string
					id?: number
					slug?: string
				}
				Relationships: []
			}
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			[_ in never]: never
		}
		Enums: {
			[_ in never]: never
		}
		CompositeTypes: {
			[_ in never]: never
		}
	}
}
