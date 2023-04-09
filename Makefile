# Load the .env file
include .env.local
export

.SILENT: generate-types

supabase-login:
	echo "Logging into Supabase..."
	yarn supabase login

# Generate supabase types
generate-types:
	echo "Generating Supabase types..."
	yarn --silent supabase gen types typescript --project-id $(SUPABASE_PROJECT_ID) > app/types/supabase.ts