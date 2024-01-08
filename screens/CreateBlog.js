import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

export default function CreateBlog( {navigation}) {

  const { addBlogPost } = useContext(Context)

  return (
    <View>
      <BlogPostForm
      isEditable={false}
      onSubmit={(title, content) => {
        addBlogPost(title, content,()=>navigation.navigate("Home"));
      }} />
      <View></View>
    </View>

  )
}

const styles = StyleSheet.create({})