import Link from "next/link";
import { Button, IconButton } from "@chakra-ui/react";

const ButtonLink = ({ icon, href, newPage = true, children, ...rest }) => {
	return (
		<Link href={href}>
			<a target={newPage ? "blank" : ""}>
				{icon && !children ? (
					<IconButton
						{...rest}
						icon={icon}
						colorScheme='blue'
						textTransform='capitalize'
					>
						{children}
					</IconButton>
				) : (
					<Button
						{...rest}
						rightIcon={icon}
						colorScheme='blue'
						textTransform='capitalize'
					>
						{children}
					</Button>
				)}
			</a>
		</Link>
	);
};

export default ButtonLink;

