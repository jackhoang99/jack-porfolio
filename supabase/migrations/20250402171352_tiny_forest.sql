/*
  # Add gallery images to projects table

  1. Changes
    - Add `gallery_images` array column to store multiple project images
    - Add `short_description` for preview cards
    - Update existing columns
*/

DO $$ 
BEGIN
  -- Add gallery_images column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'projects' AND column_name = 'gallery_images'
  ) THEN
    ALTER TABLE projects 
    ADD COLUMN gallery_images text[] DEFAULT '{}';
  END IF;

  -- Add short_description column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'projects' AND column_name = 'short_description'
  ) THEN
    ALTER TABLE projects 
    ADD COLUMN short_description text;
  END IF;
END $$;