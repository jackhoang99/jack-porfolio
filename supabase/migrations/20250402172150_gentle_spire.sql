/*
  # Add test projects data

  1. Changes
    - Insert sample projects with all required fields including gradients
*/

INSERT INTO projects (
  title,
  short_description,
  description,
  main_image,
  gallery_images,
  technologies,
  github_url,
  live_url,
  featured,
  gradient_from,
  gradient_to
) VALUES
(
  'E-Commerce Platform',
  'Modern e-commerce solution with real-time inventory',
  'A full-featured e-commerce platform built with React and Node.js. Features include real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
  ARRAY[
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    'https://images.unsplash.com/photo-1524749292158-7540c2494485',
    'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2'
  ],
  ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
  'https://github.com/example/ecommerce',
  'https://demo-ecommerce.com',
  true,
  '#4F46E5',
  '#9333EA'
),
(
  'AI-Powered Chat Application',
  'Real-time chat with AI-driven features',
  'An innovative chat application that leverages artificial intelligence for smart message suggestions, automatic translation, and content moderation.',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
  ARRAY[
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d'
  ],
  ARRAY['React', 'TypeScript', 'OpenAI', 'WebSocket', 'Node.js'],
  'https://github.com/example/ai-chat',
  'https://ai-chat-demo.com',
  true,
  '#2563EB',
  '#3B82F6'
),
(
  'Task Management Dashboard',
  'Intuitive project and task management system',
  'A comprehensive task management solution designed for teams. Features include real-time updates, task dependencies, Gantt charts, and detailed analytics.',
  'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d',
  ARRAY[
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12',
    'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83'
  ],
  ARRAY['React', 'Redux', 'Node.js', 'MongoDB', 'Socket.io'],
  'https://github.com/example/task-manager',
  'https://task-dashboard-demo.com',
  true,
  '#0891B2',
  '#0E7490'
);