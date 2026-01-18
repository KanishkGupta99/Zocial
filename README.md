# Zocial

A modern, full-featured social media application built with Next.js, featuring real-time interactions, user profiles, and a sleek interface.

## What is Zocial?

Zocial is a social networking platform that enables users to create posts, share images, follow other users, interact through likes and comments, and discover new connections. Built with Next.js 16, TypeScript, and Prisma, it provides a fast, responsive, and intuitive social media experience.

## Features

### Core Functionality

- **🔐 Authentication & User Management**
  - Secure authentication powered by Clerk
  - User profile creation and synchronization
  - Customizable user profiles with avatar, bio, location, and website

- **📝 Posts & Content**
  - Create text posts and share thoughts
  - Upload and display images (via Cloudinary integration)
  - Delete your own posts
  - View all posts in a chronological feed

- **💬 Interactions**
  - Like and unlike posts with visual feedback
  - Add comments to posts
  - View comment threads with author information
  - Real-time interaction updates

- **👥 Social Connections**
  - Follow and unfollow users
  - View follower and following counts
  - Discover users with "Who to Follow" suggestions
  - Profile pages showing posts and liked content

- **🔔 Notifications**
  - Real-time notifications for likes, comments, and follows
  - Mark notifications as read
  - Visual indicators for unread notifications
  - Contextual notification details with post previews

- **🎨 User Interface**
  - Dark and light theme support with system preference detection
  - Responsive design for mobile and desktop
  - Clean, modern UI built with Radix UI components
  - Sidebar navigation with user stats
  - Sticky navigation bar

- **📊 Profile Features**
  - Comprehensive user profiles with bio and metadata
  - View your posts and liked posts in separate tabs
  - Edit profile information (name, bio, location, website)
  - Profile statistics (followers, following, posts)
  - Join date display

## Why Zocial?

- **Modern Stack**: Built with the latest Next.js App Router, React Server Components, and TypeScript for type-safe development
- **Performance**: Optimized database queries with Prisma, efficient image handling with Cloudinary
- **User Experience**: Intuitive interface with optimistic UI updates and smooth interactions
- **Scalable Architecture**: Clean separation of server actions, components, and database models
- **Developer-Friendly**: Well-structured codebase following Next.js best practices

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database
- Clerk account (for authentication)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zocial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/zocial"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   CLERK_SECRET_KEY="your_clerk_secret_key"
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
   CLOUDINARY_API_KEY="your_cloudinary_api_key"
   CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Usage Examples

**Creating a Post:**
1. Sign in to your account
2. Type your message in the post composer on the home page
3. Optionally upload an image by clicking the "Photo" button
4. Click "Post" to publish

**Following a User:**
1. Visit a user's profile by clicking on their username
2. Click the "Follow" button
3. You'll see their posts in your feed

**Managing Notifications:**
1. Click the notifications icon in the navigation bar
2. View all your notifications for likes, comments, and follows
3. Notifications are automatically marked as read when viewed

## Project Structure

```
zocial/
├── src/
│   ├── actions/          # Server actions for data mutations
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   └── ui/          # Reusable UI components (shadcn/ui)
│   └── lib/             # Utility functions and configurations
├── prisma/              # Database schema and migrations
└── public/              # Static assets
```

## Technologies Used

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **Image Upload**: Cloudinary
- **UI Components**: Radix UI (via shadcn/ui)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Theme**: next-themes

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Getting Help

- **Documentation**: Check the [Next.js documentation](https://nextjs.org/docs) for framework-specific questions
- **Issues**: Report bugs or request features by opening an issue in the repository
- **Discussions**: Join discussions about the project in the repository's discussion forum

## Contributing

Contributions are welcome! If you'd like to contribute to Zocial:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

## License

This project is private. All rights reserved.

---

Built with ❤️ using Next.js and modern web technologies.
