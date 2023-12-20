import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Bulletin.module.css';
import { Comment } from '@prisma/client';
import { useRouter } from 'next/router';
import Tabs from '@/components/Header/Header'; // 실제 파일 구조에 맞게 경로 조정
import Footer from '@/components/Footer/Footer'; 
const BulletinPage = () => {
  const [bulletin, setBulletin] = useState<{
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    comments: Comment[];
  } | null>(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchBulletin = async () => {
      try {
        const response = await fetch(`/api/bulletins/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setBulletin(data);
      } catch (error) {
        console.error('Failed to fetch bulletin:', error);
      }
    };

    if (id) {
      fetchBulletin();
    }
  }, [id]);

  const handleDeleteComment = async (commentId: string) => {
    const response = await fetch('/api/comment', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ commentId }),
    });

    if (response.ok && bulletin) {
      setBulletin({
        ...bulletin,
        comments: bulletin.comments.filter((comment) => comment.id !== commentId),
      });
    }
  };

  if (!bulletin) {
    return <p>Loading...</p>;
  }

  return (
  <div>
    <Tabs />
    <div className={styles.bulletinContainer}>
      <h1 className={styles.bulletinTitle}>{bulletin.title}</h1>
      <p className={styles.bulletinContent}>{bulletin.content}</p>
      <div className={styles.commentsContainer}>
        <h2 className={styles.commentsTitle}>댓글</h2>
        <div className={styles.comments}>
        {bulletin.comments && bulletin.comments.map((comment) => (
  <div key={comment.id} className={styles.comment}>
    <p className={styles.commentContent}>{comment.content}</p>
    <button
      onClick={() => handleDeleteComment(comment.id)}
      className={styles.deleteButton}
    >
      댓글 삭제
    </button>
  </div>
))}

        </div>
      </div>
      
        <a href="../Board">게시판으로 돌아가기</a>
      
    </div>
    <Footer />
  </div>
  );
};

export default BulletinPage;

