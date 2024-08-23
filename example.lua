local Example = zUI.CreateMenu("Titre", "Sous-Titre", "F1", "Ce menu utilise le zUI.")
Example:SetClosable(false)
local Example_SubMenu = zUI.CreateSubMenu(Example, "Submenu", "Sous-Titre")

local IsChecked = false


Example:SetItems(function(Items)
    Items:AddSeparator("C'est un séparateur !")
    Items:AddLine({ "#ff0000", "#00ff00", "#0000ff" })
    Items:AddButton("Bouton", "C'est un bouton !",
        { RightLabel = "→" },
        function(onSelected, onHovered)
            if onSelected then
                print("Boutton cliqué !")
            end
        end, Example_SubMenu)
    Items:AddButton("Bouton #2", "C'est un bouton qui utilise le KeyboardInput !", { RightBadge = "CLOTHING_ICON_B" },
        function(onSelected, onHovered)
            if onSelected then
                local Question = zUI.KeyboardInput("Titre", "Sous-Titre", "PlaceHolder :)", 15)
                print(("Réponse: %s"):format(Question))
            end
        end)
    Items:AddCheckbox("Checkbox", "C'est une checkbox !", IsChecked, { Color = "#0000ff" },
        function(onSelected, onHovered, isChecked)
            if onSelected then
                IsChecked = isChecked
                if isChecked then
                    print("Je suis coché !")
                else
                    print("Je ne suis pas coché :'(")
                end
            end
        end)
    Items:AddList("Liste", "C'est une liste !", { "~r~0", "~b~1" }, {},
        function(onSelected, onHovered, onListChange, index)
            if onSelected then
                print(("L'index %d est sélectionné !"):format(index))
            end
            if onListChange then
                print(("L'index %d est apparu !"):format(index))
            end
        end)
end)

Example:OnClose(function()
    print("I'm closed !")
end)

Example_SubMenu:SetItems(function(Items)
    Items:AddSeparator("This is a Submenu")
end)
