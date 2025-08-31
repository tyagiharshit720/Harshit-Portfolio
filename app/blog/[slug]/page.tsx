// app/blog/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPosts, BlogPost } from "@/lib/blogData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostDetail({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-20 bg-gray-50 xl:ml-80">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-6">Post not found</h1>
              <Link href="/#blog" className="text-blue-600 hover:underline">
                &larr; Back to Blog
              </Link>
            </div>
          </div>
        </section>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gray-50 xl:ml-80">
        <div className="container mx-auto px-6">
          <Link href="/#blog" className="text-blue-600 hover:underline mb-4 inline-block">
            &larr; Back to Blog
          </Link>
          
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{post.date}</span>
                <span>by {post.author}</span>
              </div>
              
              <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
              
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  
  return {
    title: `${post.title} - Harshit Kumar Tyagi`,
    description: post.description,
  };
}