function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className=" text-center py-4 border-t">
        <p className=" text-gray-600">© {currentYear} - MarioDevs </p>
    </footer>
  )
}

export default Footer