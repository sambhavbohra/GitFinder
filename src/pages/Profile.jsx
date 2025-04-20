import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import Loader from '../components/Loader';
import { useGitHub } from '../context/GitHubContext';

const Profile = () => {
  const { username } = useParams();
  const { user, loading, error, searchUser } = useGitHub();
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchUser = async () => {
      if (username && (!user || user.login !== username)) {
        const result = await searchUser(username);
        if (!result) {
          navigate('/');
        }
      }
    };
    
    fetchUser();
    
    document.title = username 
      ? `${username} - GitFinder Profile` 
      : 'GitFinder - GitHub User Explorer';
  }, [username, user, searchUser, navigate]);
  
  if (loading) return <Loader />;
  
  if (error) {
    return (
      <div className="max-w-md mx-auto text-center py-8">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
        <p className="text-gray-700 mb-4">{error}</p>
        <button
          onClick={() => navigate('/')}
          className="btn btn-primary"
        >
          Back to Home
        </button>
      </div>
    );
  }
  
  if (!user) return null;
  
  return (
    <div className="page-transition">
      <ProfileCard />
    </div>
  );
};

export default Profile;