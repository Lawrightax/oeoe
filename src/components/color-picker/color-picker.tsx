import {
    ActionIcon,
    Card,
    ColorSwatch,
    createStyles,
    Menu, rem,
    SimpleGrid,
    UnstyledButton,
    useMantineTheme
} from "@mantine/core";
import React from "react";
import {useLocalStorage} from "usehooks-ts";
import {IconPencil} from "@tabler/icons-react";

const useStyle = createStyles((theme) => ({
    colorButton: {
        padding: `${rem(0)} ${rem(0)}`,
        margin: `${rem(2)} ${rem(2)}`,
    },
    })
)
export function ColorPicker() {
    const [colors, setColor] = useLocalStorage("primaryColor", "red");

    const { classes } = useStyle();
    const theme = useMantineTheme();
    const swatches = Object.keys(theme.colors).map((color) => (
            <Menu.Item className={classes.colorButton}>
                <ActionIcon className={classes.colorButton} onClick={() => setColor(color)}>
                    <ColorSwatch key={color} color={theme.colors[color][6]} />
                </ActionIcon>
            </Menu.Item>
    ));

    return (
        <Menu withArrow>
            <Menu.Target>
                <ActionIcon radius="lg" size="lg" variant="filled">
                    <IconPencil size="75%">
                    </IconPencil>
                </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
                <SimpleGrid cols={4} spacing={0}>
                    {swatches}
                </SimpleGrid>
            </Menu.Dropdown>
        </Menu>
    )
}