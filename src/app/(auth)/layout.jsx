export default function AuthLayout({ children }) {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f7f9fc' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1>Authentication Pages</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
