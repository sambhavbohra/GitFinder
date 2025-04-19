import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios'

const GithubContext = createContext()

export const GithubProvider = ({children}) => {
    const[user, setUser] = useState(null)
    const [ repos, setRepos ] = useState([])
    const [ followers, setFollowers ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState("")

    const fetchGitHubData = async (username) => {
        setLoading(true)
        setError("")
        try {
            const user = await axios.get(`https://api.github.com/users/${username}`)
            const repos = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
            const followers = await axios.get(`https://api.github.com/users/${username}/followers`)
            
            setUser(user.data)
            setRepos(repos.data)
            setFollowers(followers.data)
        } catch (error) {
            setError("User not found! Recheck the username.")
            setUser(null)
            setRepos([])
            setFollowers([])
        }finally{
            setLoading(false)
        }
    }


  return (
    <GithubContext.Provider value={{user, repos, followers, loading, error, fetchGitHubData}}>
        {children}
    </GithubContext.Provider>
  )
}

export const useGitHub = () => useContext(GithubContext)