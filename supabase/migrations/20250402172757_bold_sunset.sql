/*
  # Update project images with reliable URLs

  1. Changes
    - Update main_image and gallery_images for all projects with working image URLs
*/

-- Delete existing test data
DELETE FROM projects WHERE title IN (
  'E-Commerce Platform',
  'AI-Powered Chat Application',
  'Task Management Dashboard'
);

-- Insert updated test data with reliable images
INSERT INTO projects (
  title,
  short_description,
  description,
  main_image,
  gallery_images,
  technologies,
  github_url,
  live_url,
  featured
) VALUES
(
  'E-Commerce Platform',
  'Modern e-commerce solution with real-time inventory',
  'A full-featured e-commerce platform built with React and Node.js. Features include real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
  'https://images.unsplash.com/photo-1557821552-17105176677c?q=80',
  ARRAY[
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80',
    'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80',
    'https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80'
  ],
  ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
  'https://github.com/example/ecommerce',
  'https://demo-ecommerce.com',
  true
),
(
  'AI-Powered Chat Application',
  'Real-time chat with AI-driven features',
  'An innovative chat application that leverages artificial intelligence for smart message suggestions, automatic translation, and content moderation.',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80',
  ARRAY[
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80'
  ],
  ARRAY['React', 'TypeScript', 'OpenAI', 'WebSocket', 'Node.js'],
  'https://github.com/example/ai-chat',
  'https://ai-chat-demo.com',
  true
),
(
  'Task Management Dashboard',
  'Intuitive project and task management system',
  'A comprehensive task management solution designed for teams. Features include real-time updates, task dependencies, Gantt charts, and detailed analytics.',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80',
  ARRAY[
    'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80',
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80',
    'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80'
  ],
  ARRAY['React', 'Redux', 'Node.js', 'MongoDB', 'Socket.io'],
  'https://github.com/example/task-manager',
  'https://task-dashboard-demo.com',
  true
);