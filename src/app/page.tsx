import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import WhoToFollow from "@/components/WhoToFollow";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  let posts: any[] = [];
  let dbUserId: string | null = null;

  try {
    // Fetch posts first
    posts = await getPosts();

    // Then fetch user ID only if posts were fetched successfully
    dbUserId = await getDbUserId();
  } catch (error) {
    console.error("Error in Home page:", error);
    // Optionally render a fallback UI or just show nothing
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {user && <CreatePost />}

        <div className="space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostCard key={post.id} post={post} dbUserId={dbUserId} />
            ))
          ) : (
            <p className="text-gray-500">No posts to show.</p>
          )}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <WhoToFollow />
      </div>
    </div>
  );
}
