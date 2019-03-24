import React from 'react'

const footerStyle = {
    background: "white",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
  };

export default () => {
  return (
    <footer style={footerStyle} className="mt-5 p-4 text-center">
    Copyright &copy; {new Date().getFullYear()} DevHub
    </footer>
  )
}
