RegisterNUICallback('zUI-Hovered', function(id, cb)
    local actionData = ItemsData[id]
    if actionData.action then
        actionData.action(false, true)
    end
    cb('ok')
end)
