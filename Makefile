# Load the .env file
include .env
export

.SILENT: generate-types

supabase-login:
	echo "Logging into Supabase..."
	yarn supabase login

# Generate supabase types
generate-types:
	echo "Generating Supabase types..."
	yarn --silent supabase gen types typescript --project-id $(SUPABASE_PROJECT_ID) > app/types/supabase.ts

run-flask:
	python3 /py-setup/python-packages/bin/uvicorn python-src.index:app --reload