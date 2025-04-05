/*
  # Add technologies to projects table

  1. Changes
    - Add technologies array column to projects table
*/

DO $$ 
BEGIN
  -- Add technologies column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'projects' AND column_name = 'technologies'
  ) THEN
    ALTER TABLE projects 
    ADD COLUMN technologies text[] DEFAULT '{}';
  END IF;
END $$;