interface JournalRootLayoutProps {
	children: React.ReactNode;
}

const JournalRootLayout: React.FC<JournalRootLayoutProps> = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<nav>Journal Global Navigation</nav>
				{children}
			</body>
		</html>
	);
}

export default JournalRootLayout;
