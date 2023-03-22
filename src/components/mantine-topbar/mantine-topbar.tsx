import {
    Container,
    createStyles,
    Group,
    Header,
    rem,
} from "@mantine/core";
import React, {useContext} from "react";
import {MantineLogo} from "@mantine/ds";
import {ColorPicker} from "../color-picker/color-picker";
import {SwitchToggle} from "../theme-toggle/theme-toogle";
import {PageContext} from "../../context/PageContext";

const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors['dark'][4], 0.9) : theme.fn.rgba(theme.colors['gray'][5], 1),
        borderBottom: 0,
        marginBottom: 0,
    },

    inner: {
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    links: {
        paddingTop: theme.spacing.lg,
        height: 70,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    mainLinks: {
        marginRight: -theme.spacing.sm,
    },

    mainLink: {
        textTransform: 'uppercase',
        fontSize: rem(13),
        textDecoration: 'none',
        color:
            theme.colorScheme === 'dark' ? theme.white : theme.black,
        padding: `${rem(7)} ${theme.spacing.sm}`,
        fontWeight: 700,
        borderBottom: `${rem(2)} solid transparent`,
        transition: 'border-color 100ms ease, opacity 100ms ease',
        opacity: 0.9,
        borderTopRightRadius: theme.radius.sm,
        borderTopLeftRadius: theme.radius.sm,

        '&:hover': {
            opacity: 1,
            textDecoration: 'none',
            color:
                theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
    },
    mainLinkActive: {
        color:
            theme.colorScheme === 'dark' ? theme.white : theme.black,
        opacity: 1,
        borderBottomColor:
            theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][5],
        backgroundColor: theme.fn.lighten(
            theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
            0.1
        ),
    },


    linkLabel: {
        marginRight: rem(5),
    },

    colorButton: {
        padding: `${rem(0)} ${rem(0)}`,
        margin:`${rem(2)} ${rem(2)}`,
    }
}));

export function HeaderBar() {
    const { classes, cx } = useStyles();
    const { page, setPage } = useContext(PageContext);
    return (
        <Header height={70} className={classes.header}>
            <Container className={classes.inner} fluid>
                <Group position={"left"} spacing={5}>
                    <a href="/">
                        <MantineLogo size={34}  />
                    </a>
                </Group>
                <div className={classes.links}>
                    <Group position="right"></Group>
                    <Group position="right" spacing={5} className={classes.mainLinks}>
                        <a href="/" className={cx(classes.mainLink, { [classes.mainLinkActive]: 0 === page })} onClick={(e) => setPage(0)}> Home </a>
                        <a className={cx(classes.mainLink, { [classes.mainLinkActive]: 1 === page })} onClick={(e) => setPage(1)}> My Projects </a>
                        <a className={cx(classes.mainLink, { [classes.mainLinkActive]: 2 === page })} onClick={(e) => setPage(2)}> Contact </a>
                        <a href="/aboutme" className={cx(classes.mainLink, { [classes.mainLinkActive]: 3 === page })} onClick={(e) => setPage(3)}> About me </a>
                    </Group>
                </div>
                <Group>
                    <ColorPicker />
                    <SwitchToggle />
                </Group>
            </Container>
        </Header>
    )
}