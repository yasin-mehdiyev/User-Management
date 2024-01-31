import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

//Chunks
import { NotFoundPage, UsersPage, PostsPage, AlbumsPage } from "./chunks";

export function Routers() {
  return (
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<UsersPage />} />

          <Route path="/user/:userId/*">
            <Route path="posts" element={<PostsPage />} />
            <Route path="albums" element={<AlbumsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
  );
}
